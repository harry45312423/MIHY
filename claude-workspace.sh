#!/bin/bash
# ===========================================
# Claude Code 멀티 세션 워크스페이스
# 사용법: ~/claude-workspace.sh
# ===========================================

SESSION="claude-crm"
PROJECT_DIR="/Users/workspace/JS-CRM/jinsung-crm"

# 이미 세션이 있으면 연결
tmux has-session -t $SESSION 2>/dev/null
if [ $? == 0 ]; then
    echo "기존 세션에 연결합니다..."
    tmux attach -t $SESSION
    exit 0
fi

echo "새 워크스페이스를 생성합니다..."

# 창 1: Backend Claude 세션
tmux new-session -d -s $SESSION -n '🔧backend'
tmux send-keys -t $SESSION:1 "cd $PROJECT_DIR/worker && clear" C-m
tmux send-keys -t $SESSION:1 "echo '=== Backend Claude 세션 ===' && echo 'claude 명령어로 시작하세요'" C-m

# 창 2: Frontend Claude 세션
tmux new-window -t $SESSION -n '🎨frontend'
tmux send-keys -t $SESSION:2 "cd $PROJECT_DIR/frontend && clear" C-m
tmux send-keys -t $SESSION:2 "echo '=== Frontend Claude 세션 ===' && echo 'claude 명령어로 시작하세요'" C-m

# 창 3: Worker 개발 서버
tmux new-window -t $SESSION -n '⚙️worker-dev'
tmux send-keys -t $SESSION:3 "cd $PROJECT_DIR/worker && clear" C-m
tmux send-keys -t $SESSION:3 "echo '=== Worker Dev Server ===' && echo 'npm run dev 로 시작하세요'" C-m

# 창 4: Frontend 개발 서버
tmux new-window -t $SESSION -n '🖥️front-dev'
tmux send-keys -t $SESSION:4 "cd $PROJECT_DIR/frontend && clear" C-m
tmux send-keys -t $SESSION:4 "echo '=== Frontend Dev Server ===' && echo 'npm run dev 로 시작하세요'" C-m

# 창 5: Git/기타 작업
tmux new-window -t $SESSION -n '📝git'
tmux send-keys -t $SESSION:5 "cd $PROJECT_DIR && clear" C-m
tmux send-keys -t $SESSION:5 "git status" C-m

# 첫 번째 창으로 이동 후 연결
tmux select-window -t $SESSION:1
tmux attach -t $SESSION

CREATE TABLE beacon_requests (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name    TEXT NOT NULL,
  student_phone   TEXT NOT NULL,
  request_date    DATE NOT NULL DEFAULT CURRENT_DATE,
  status          TEXT NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending','processed','consent_issue','completed')),
  admin_name      TEXT,
  admin_note      TEXT,
  processed_at    TIMESTAMPTZ,
  completed_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_beacon_status ON beacon_requests(status);
CREATE INDEX idx_beacon_created ON beacon_requests(created_at DESC);

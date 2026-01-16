export const kpis = [
  { label: 'Total Users', value: '99.5K', delta: '+6.2% vs last week', tone: 'good' },
  { label: 'New Users', value: '70.0K', delta: '+3.1% vs last week', tone: 'good' },
  { label: 'Sessions', value: '123.4K', delta: '-1.8% vs last week', tone: 'bad' },
  { label: 'Revenue', value: '$15.5K', delta: '+4.4% vs last week', tone: 'good' },
];

export const opsTickets = [
  { id: 'OPS-1842', title: 'Latency spike on price-feed', priority: 'P1', status: 'Investigating', owner: 'On-call' },
  { id: 'OPS-1843', title: 'ETL delayed: risk limits refresh', priority: 'P2', status: 'Mitigated', owner: 'Pipelines' },
  { id: 'OPS-1844', title: 'Kafka consumer lag (orders)', priority: 'P2', status: 'Monitoring', owner: 'Infra' },
  { id: 'OPS-1845', title: 'Auth token refresh errors', priority: 'P3', status: 'Open', owner: 'Platform' },
];

export const alerts = [
  { time: '09:12', type: 'Risk', message: 'Drawdown approaching threshold', severity: 'warn' },
  { time: '10:05', type: 'Ops', message: 'Order gateway retries increased', severity: 'warn' },
  { time: '11:41', type: 'Security', message: 'Suspicious login pattern detected', severity: 'bad' },
  { time: '12:22', type: 'Data', message: 'Warehouse freshness OK', severity: 'good' },
];

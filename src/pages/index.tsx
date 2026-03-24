export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Kenna Real Estate — Analytics Backend</h1>
      <p style={{ marginTop: '1rem', color: '#555' }}>
        API endpoints ready:
      </p>
      <ul style={{ marginTop: '0.5rem', lineHeight: '2' }}>
        <li><code>POST /api/seed-org</code> — create an organization</li>
        <li><code>POST /api/events</code> — log an analytics event (for n8n)</li>
        <li><code>GET /api/events?orgId=xxx</code> — fetch events for an org</li>
      </ul>
    </main>
  );
}

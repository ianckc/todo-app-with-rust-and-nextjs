async function getData() {
  const result = await fetch('http://127.0.0.1:8080/')
  
  if (!result.ok) {
    throw new Error('Failed to fetch from the backend')
  }
 
  return result.text()
}

export default async function Home() {
  const content = await getData()
  return (
    <main>
      <p>{content}</p>
    </main>
  );
}

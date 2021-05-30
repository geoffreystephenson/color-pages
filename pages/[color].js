import colors from '../data/colors.json'

export default function Color({ color }) {
  return <div className='color-page' style={{ backgroundColor: color.hex }}>
    <h1>{color.name}</h1>
  </div>
}

export async function getStaticProps({ params }) {
  const color = colors.find(color => color.name === params.color)
  return { props: { color } }
}

export async function getStaticPaths() {
  const paths = colors.map(color => ({
    params: { color: color.name }
  }))

  return { paths, fallback: false }
}

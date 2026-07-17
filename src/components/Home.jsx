import Logo from './Logo'
export default function Home({ formGit }) {
    return (
    <div className="hero">
      <Logo />
      <h2>KOD ACIKTIRIR<br />PİZZA, DOYURUR</h2>
      <button onClick={formGit}>ACIKTIM</button>
    </div>
  )
}
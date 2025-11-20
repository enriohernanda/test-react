import './App.css'
import ProfileCard from './components/ProfileCard'
import { useState } from 'react'

function App() {
  const[angka, setAngka] = useState(0);
  const[name, setName]= useState('"Silahkan isi nama anda"')

  const ubahNama = (e) => {
    setName(e.target.value)
  }
  return(
    <>
      <h3>Tambah Angka</h3>
      <p>Angka {angka}</p>
      <button onClick={() => setAngka(angka + 1)}>Tambah Angka</button>
      <h1>Selamat Datang, {name}</h1>
      <input type="text" placeholder='ketik nama' onChange={ubahNama} />

    </>
    // <div style={{ display:"flex", gap:"20px", padding:"30px" }}>
    //   <ProfileCard photo="https://i.pravatar.cc/150?img=4" name="Enrio" job="Fullstack Developer" bio="Bismillah"/>
    //   <ProfileCard photo="https://i.pravatar.cc/150?img=3" name="Hernanda" job="Frontend Developer" bio="Keep spirit!"/>
    //   <ProfileCard photo="https://i.pravatar.cc/150?img=4" name="Enrio" job="Fullstack Developer" bio="Bismillah"/>
    //   <ProfileCard photo="https://i.pravatar.cc/150?img=3" name="Hernanda" job="Frontend Developer" bio="Keep spirit!"/>
    // </div>
  )
}

export default App

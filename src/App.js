import {
  useState,
  useEffect
} from 'react'
import Table from './Table'
import Table2 from './Table2'

import First from './Algorithm/First'
import Second from './Algorithm/Second'
import Third from './Algorithm/Third'
import 'bootstrap/dist/css/bootstrap.css'
import Thread from './Thread'

function App(props) {
  const [myArr,
    setArr] = useState(props.arr);
  const [show,
    setShow] = useState(false);
  const [n,
    setN] = useState(1);
  const [tk,
    setTk] = useState([1]);
  const [dev,
    setDev] = useState(false);
  const [expel,
    setExpel] = useState(false);
  const [isDynamic,
    setDynamic] = useState(false);
  function changing(e, index, type) {
    setArr(myArr.map(
      (val, ind) => {
        //alert(e.target.value)
        if (index === ind) {
          val[type] = e.target.value
          if (isNaN(parseInt(val[type]))) {
            val[type] = 0
          } else {
            val[type] = parseInt(val[type]);
          }
          return val
        }
        return val
      }
    ))
  }
  useEffect(() => {
    setShow(false);
  }, [myArr, tk, n, dev]);
  function add(e) {
    const lastLetter = myArr[myArr.length - 1].name
    if (lastLetter === 'y') {
      e.target.className += " disabled"
    }
    e.target.nextSibling.className = "btn btn-primary col-3 mt-5 mb-5"
    setArr((arr) => [...arr, {
      name: String.fromCharCode(lastLetter.charCodeAt() + 1),
      begin: 1,
      resource: 1,
      priority: 1
    }])
  }

  function remove(e) {
    const lastLetter = myArr[myArr.length - 1].name
    if (lastLetter === 'b') {
      e.target.className += " disabled"
    }
    e.target.previousSibling.className = "btn btn-primary col-3 mt-5 mb-5"
    setArr((arr) => [...arr.slice(0, arr.length - 1)])
  }


  return (
    <div className="container">
      <div className="row justify-content-between">
        <h1 className="text-center text-success">Rejalashtirish algoritmlari</h1>
        <Table values={myArr} changing={changing} />

        <button className="btn btn-success col-3 mt-5 mb-5" onClick={() => setShow(true)}>Ishlatish</button>
        <button className="btn btn-success col-3 mt-5 mb-5" onClick={add}>Jarayon qo'shish</button>
        <button className="btn btn-success col-3 mt-5 mb-5" onClick={remove}>Jarayonni olib tashlash</button>
      </div>
      <h2 className="text-center">Patoklar soni</h2>
      <div className='row'>
        <div className='col-4 offset-4'>
          <input className="form-control mb-5" value={n} onChange={e => setN(n =>
            isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))} />
        </div>
      </div>
      <Thread arr={tk} update={setTk/*I am not a senior*/} />
      <div className='row'>
        <div className='col-4 offset-4'>
          <span>Jarayon qaysi resursda bajarilayotganini ko'rish</span><br></br>
          <input type="checkbox" value={dev} onChange={() => setDev(!dev)} />
        </div>
        <div className='col-4 offset-4'>
          <span>haydab chiqarish</span><br></br>
          <input type="checkbox" value={expel} onChange={() => setExpel(!expel)} />
        </div>
        <div className='col-4 offset-4'>
          <span>Dinamik prioritet</span><br></br>
          <input type="checkbox" value={isDynamic} onChange={() => setDynamic(!isDynamic)} />
        </div>
      </div>
      {show &&
        <>
          <Table2 values={First(myArr, tk, n, false, dev)} title="Navbat algoritmi" />
          <Table2 values={First(myArr, tk, n, true, dev)} title="Navbat algoritmi prioritet bo'yicha" />
          <Table2 values={Second(myArr, tk, n, dev, expel, isDynamic)} title="Charxpalak algoritmi" />
          {/* <Table2 values={Second(myArr, tk, n, dev, true)} title="Charxpalak haydab chiqariw algoritmi" /> */}
          <Table2 values={Third(myArr, tk, n, dev, expel)} title="Eng qisqasiga xizmat algoritmi" />
        </>
      }
    </div>
  )

}

export default App;
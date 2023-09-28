import { useEffect, useState } from 'react';
import styles from './conta.module.css';

export function Conta() {
  const [pagar, setpagar] = useState([]);
  const [addPagar, setaddPagar] = useState('');

  const [receber, setreceber] = useState([]);
  const [addReceber, setaddReceber] = useState('');

  const [saldoFinal, setSaldoFinal] = useState(0);

  const addItem = () => {
    setpagar([...pagar, addPagar]);
    setaddPagar('');
  };

  const addItem2 = () => {
    setreceber([...receber, addReceber]);
    setaddReceber('');
  };

  useEffect(() => {
    const totalPagar = pagar.reduce((acc, current) => acc + current, 0);
    const totalReceber = receber.reduce((acc, current) => acc + current, 0);

    const saldoFinal = totalReceber - totalPagar;
    setSaldoFinal(saldoFinal);
  }, [pagar, receber]);

  return (
    <div>
      <div>
        <h1>Desafio de Programação</h1>
      </div>
      <div className={styles.main}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Contas a Pagar"
            name="conta_pagar"
            value={addPagar}
            onChange={(e) => {
              setaddPagar(e.target.value);
            }}
          />
          <button onClick={addItem} className={styles.btn}>
            Adicionar
          </button>
          {pagar.map((item) => (
            <p className={styles.apagar}>{`R$ ${item}`}</p>
          ))}
        </div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Contas a receber"
            name="conta_receber"
            value={addReceber}
            onChange={(e) => {
              setaddReceber(e.target.value);
            }}
          />
          <button onClick={addItem2} className={styles.btn}>
            Adicionar
          </button>
          {receber.map((item2) => (
            <p className={styles.receber}>{`R$ ${item2}`}</p>
          ))}
        </div>
        <div className={styles.result}>
          <div>SALDO TOTAL: $ {saldoFinal} </div>
        </div>
      </div>
    </div>
  );
}

import styles from '../../styles/List.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  //Works with josesmorest (sans database) and joseSQLALCHEMY
  const res = await fetch('http://127.0.0.1:5000/store');
  const data = await res.json();

  return {
    props: { stores: data }
  }
}

const Stores = ({ stores }) => {
  console.log(stores)

  return (
    <div>
      <h1>List of All Stores</h1>
      {stores.map(store => (
        <Link href={'/greg-flask-stores/' + store.id} key={store.id}>
          <a className={styles.single}>
            <h3>{ store.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Stores;
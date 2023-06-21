import styles from '../../styles/List.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('http://gregprojects.fly.dev/recipes');
  const data = await res.json();

  return {
    props: { recipes: data }
  }
}

const Recipes = ({ recipes }) => {
  console.log(recipes)

  return (
    <div>
      <h1>List of All Recipes</h1>
      {recipes.map(recipe => (
        <Link href={'/greg-recipes/' + recipe.id} key={recipe.id}>
          <a className={styles.single}>
            <h3>{ recipe.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Recipes;
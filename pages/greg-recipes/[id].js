export const getStaticPaths = async () => {
    const res = await fetch('http://gregprojects.fly.dev/recipes/');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(recipe => {
      return {
        params: { id: recipe.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://gregprojects.fly.dev/recipes/' + id);
    const data = await res.json();
  
    return {
      props: { recipe: data }
    }
  }
  
  const Details = ({ recipe }) => {
    return (
      <div>
        <h1>{ recipe.name }</h1>
        <img src={recipe.image_url} alt="No Image Available" width="500" height="600"/>
        <p>Ingredients: { recipe.ingredients }</p>
        <p>Tools: { recipe.tools }</p>
        <p>Procedure: { recipe.procedure }</p>
        <p>Notes: { recipe.notes }</p>
        <p>Costs: { recipe.costs }</p>
      </div>
    );
  }
  
  export default Details;
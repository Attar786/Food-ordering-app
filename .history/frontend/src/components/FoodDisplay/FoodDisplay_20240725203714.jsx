const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  console.log(food_list); // Log the food_list to inspect its contents

  if (!food_list) {
    return <div>Loading...</div>; // Handle loading state or error
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near To You</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};


  // Function to handle the click event on t-shirts
  function handleTeeClick(event) {
    const tShirt = event.currentTarget;
    const name = tShirt.dataset.name;
    const price = tShirt.dataset.price;
    const image = tShirt.querySelector('img').src;

    // Store the clicked t-shirt details in sessionStorage
    sessionStorage.setItem('selectedTeeName', name);
    sessionStorage.setItem('selectedTeePrice', price);
    sessionStorage.setItem('selectedTeeImage', image);
  }

  // Get all the t-shirts and attach click event listeners to them
  const tShirts = document.querySelectorAll('.t-shirt');
  tShirts.forEach(tShirt => tShirt.addEventListener('click', handleTeeClick));


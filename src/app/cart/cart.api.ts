export async function getCart() {
  const data = await fetch("http://localhost:4000/api/cart", {
    cache: "no-store",
  });

  return data.json();
}

export async function createCart(cartData) {
  const res = await fetch("http://localhost:4000/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartData),
  });

  const data = await res.json();
  console.log(data);
}

export async function deleteCart(id: string) {
  const res = await fetch(`http://localhost:4000/api/cart/${id}`, {
    method: "DELETE",
  });

  return await res.json();
}

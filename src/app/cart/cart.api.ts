const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getCart() {
  const data = await fetch(`${BACKEND_URL}/api/cart`, {
    cache: "no-store",
  });

  return data.json();
}

export async function getLetter(id: string) {
  const data = await fetch(`${BACKEND_URL}/api/cart/${id}`, {});

  return await data.json();
}

export async function createCart(cartData: Letter) {
  const res = await fetch(`${BACKEND_URL}/api/cart`, {
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
  const res = await fetch(`${BACKEND_URL}/api/cart/${id}`, {
    method: "DELETE",
  });

  return await res.json();
}

export interface Letter {
  id?: number;
  sender?: string;
  recipient?: string;
  message?: string;
  drawingData?: string;
}
export async function updateLetter(id: string, newLetter: Letter) {
  const res = await fetch(`${BACKEND_URL}/api/cart/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLetter),
    cache: "no-store",
  });
  return await res.json();
}

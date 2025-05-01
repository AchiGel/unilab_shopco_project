const apiURL = "https://6810c78327f2fdac2412be92.mockapi.io";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${apiURL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`${apiURL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFeedbacks = async () => {
  try {
    const response = await fetch(`${apiURL}/feedbacks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getCharacters = async ({
  species = "human",
  page = 1,
}: {
  species: string;
  page: number;
}) => {
  try {
    const apiUrl = `${API_URL}/characters`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin":
          "https://rick-and-morty-ccumaco.vercel.app/",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({ species, page }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to load data. Status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error for higher-level handling
  }
};

export const getSingleCharacter = async ({ id }: { id: number }) => {
  try {
    const apiUrl = `${API_URL}/get-single-character/${id}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin":
          "https://rick-and-morty-ccumaco.vercel.app/",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to load data. Status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error for higher-level handling
  }
};

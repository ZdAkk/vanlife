// Helper function for making API requests
async function fetchData(endpoint, errorMessage) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(
      `${errorMessage}: ${res.statusText} (Status: ${res.status})`
    );
  }
  const data = await res.json();
  return data;
}

// Helper function for error handling
function handleApiError(error, customMessage) {
  console.error(customMessage || error.message);
  throw error;
}

// Fetch all vans
export async function getVans() {
  try {
    const data = await fetchData("/api/vans", "Error fetching vans data");
    return data.vans;
  } catch (error) {
    handleApiError(error);
  }
}

// Fetch a single van by ID
export async function getVan(id) {
  try {
    const data = await fetchData(
      `/api/vans/${id}`,
      `Error fetching van with ID: ${id}`
    );
    return data.van || data.vans;
  } catch (error) {
    handleApiError(error);
  }
}

// Fetch vans for a specific host
export async function getHostVans(hostId) {
  try {
    const data = await fetchData(
      `/api/hosts/${hostId}/vans`,
      `Error fetching vans for host: ${hostId}`
    );
    return data.vans;
  } catch (error) {
    handleApiError(error);
  }
}

// Fetch a single van for a specific host
export async function getHostVan(id, hostId) {
  try {
    const data = await fetchData(
      `/api/hosts/${hostId}/vans/${id}`,
      `Error fetching van with ID: ${id} for host: ${hostId}`
    );
    return data.van || data.vans[0];
  } catch (error) {
    handleApiError(error);
  }
}

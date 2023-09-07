export default class BikeIndex {  
  static async searchBike(make, location, distance) {
    try {
      const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${make}&location=${location}&distance=${distance}&stolenness=proximity&access_token=${process.env.TOKEN}`);
      const bikeResponse = response.json();
      
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } 
      
      return bikeResponse;
    } catch(error) {
      return error;
    }
  }
}
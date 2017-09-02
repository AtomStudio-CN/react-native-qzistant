export default class ProblemHelper {
  static async getCategories() {
    let response = await fetch("http://www.wolframalpha.com/input/wpg/categories.jsp?load=true");
    response = await response.json();
    //return data;
    return response.Categories.Categories;
  }
}
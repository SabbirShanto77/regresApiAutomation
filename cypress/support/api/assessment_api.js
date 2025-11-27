export class AssessmentApi {
  constructor() {
    this.baseUrl = 'http://reqres.in/api'
  }
  createUser(payload) {
    return cy.request({
      method: "POST",
      url: `${this.baseUrl}/users`,
      body: payload
    })
  }

  getUser(id) {
    return cy.request({
      method: "GET",
      url: `${this.baseUrl}/users/${id}`
    })
  }

  updateUser(id, payload) {
    return cy.request({
      method: "PUT",
      url: `${this.baseUrl}/users/${id}`,
      body: payload
    })
  }

  deleteUser(id) {
    return cy.request({
      method: "DELETE",
      url: `${this.baseUrl}/users/${id}`
    })
  }

}

export const assessmentApi = new AssessmentApi()
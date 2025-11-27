import { assessmentApi } from "../../support/api/assessment_api"

describe("API Automation Assessment - ReqRes", () => {

  let data

  before(() => {
    cy.fixture("custom_data").then((payload) => {
      data = payload
    })
  })

  it("Create User (POST)", () => {
    assessmentApi.createUser(data.createUser).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property("id")
      expect(res.body).to.have.property("createdAt")
      expect(res.body.name).to.eq(data.createUser.name)
      expect(res.body.job).to.eq(data.createUser.job)
    })
  })

  it("Get User (GET)", () => {
    assessmentApi.getUser(2).then((res) => {
      expect(res.status).to.eq(200)

      const email = res.body.data.email
      const firstName = res.body.data.first_name

      expect(email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      expect(firstName).to.not.be.empty
    })
  })

  it("Update User (PUT)", () => {
    assessmentApi.updateUser(1, data.updateUser).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property("updatedAt")
      expect(res.body.name).to.eq(data.updateUser.name)
    })
  })

  it("Delete User (DELETE)", () => {
    assessmentApi.deleteUser(1).then((res) => {
      expect(res.status).to.eq(204)
      expect(res.body).to.be.empty
    })
  })

})
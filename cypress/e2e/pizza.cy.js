describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/")
    cy.contains("ACIKTIM").click()
  })

  it("sayfa açılır", () => {
    cy.contains("Position Absolute Acı Pizza")
  })

  it("isim inputuna metin girer", () => {
    cy.get("#isim-input").type("Ekim")
    cy.get("#isim-input").should("have.value", "Ekim")
  })

  it("birden fazla malzeme seçilebilir", () => {
    cy.get(".malzeme-listesi").contains("Pepperoni").click()
    cy.get(".malzeme-listesi").contains("Sosis").click()
    cy.get(".malzeme-listesi").contains("Domates").click()

    cy.get('.malzeme-listesi input[type="checkbox"]:checked')
      .should("have.length", 3)
  })

  it("formu gönderir ve başarı sayfasını gösterir", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: {
        id: "pizza-123",
        createdAt: "2026-07-21T12:00:00.000Z"
      }
    }).as("pizzaSiparisi")

    cy.get("#isim-input").type("Ekim")

    cy.get('input[name="boyut"][value="M"]').check({
      force: true
    })

    cy.get("#hamur-select").select("İnce")

    cy.get(".malzeme-listesi").contains("Pepperoni").click()
    cy.get(".malzeme-listesi").contains("Sosis").click()
    cy.get(".malzeme-listesi").contains("Domates").click()
    cy.get(".malzeme-listesi").contains("Mısır").click()

    cy.contains("SİPARİŞ VER")
      .should("not.be.disabled")
      .click()

    cy.wait("@pizzaSiparisi")

    cy.contains("SİPARİŞ ALINDI").should("be.visible")
    cy.contains("pizza-123").should("be.visible")
  })
})
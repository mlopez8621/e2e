describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
    	cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        //1. Cree una cuenta y pruebe el login correcto y la creación de una cuenta con un login que ya existe.
        //1.1 Login Correcto
     	cy.contains('Ingresar').click()
     	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ml.lopeza@uniandes.edu.co")
     	cy.get('.cajaLogIn').find('input[name="password"]').click().type("mIClEO860621")
     	cy.get('.cajaLogIn').contains('Ingresar').click()
     	cy.contains('cuenta')
     	//1.2 la creación de una cuenta con un login que ya existe.
     	cy.visit('https://losestudiantes.co')
        cy.contains('Ingresar').click()
      	cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Michel Leonardo")
      	cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Lopez Avendaño")
      	cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ml.lopeza@uniandes.edu.co")
	    cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
	    cy.get('.cajaSignUp').find('[type="checkbox"]').check()
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
      	cy.get('.cajaSignUp').find('input[name="password"]').click().type("mIClEO860621")
      	cy.get('.cajaSignUp').find('[name="acepta"]').check()
      	cy.get('.cajaSignUp').contains('Registrarse').click()
      	cy.contains("Error: Ya existe un usuario registrado con el correo 'ml.lopeza@uniandes.edu.co'")

    })
})
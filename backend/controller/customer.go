package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/Kami0rn/Soy-juu/entities"
)


//POST /customer
func CreateCustomer(c *gin.Context) {
	var customer entities.Customer
	
	//bind
	if err := c.ShouldBindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}	

	u := entities.Customer{
		
	}

}
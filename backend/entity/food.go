package entity

import "gorm.io/gorm"

type Food struct {
	gorm.Model
	Name	string
	Price	int

	OrderFoods	[]OrderFood	`gorm:"foreignKey:FoodID"`
}
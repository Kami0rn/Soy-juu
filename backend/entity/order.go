package entity

import "gorm.io/gorm"

type Order struct {
	gorm.Model
	State	string
	Price	int

	MemberID	*uint
	Member	Member	`gorm:"foreignKey:MemberID"`

	OrderFoods	[]OrderFood	`gorm:"foreignKey:OrderID"`
}
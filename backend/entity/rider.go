package entity

import "gorm.io/gorm"

type Rider struct{
	gorm.Model
	Name	string
	Tel		int		`gorm:"uniqueIndex"`

	OrderID	*uint
	Order	Order	`gorm:"foreignKey:OrderID"`
}
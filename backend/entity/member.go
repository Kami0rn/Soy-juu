package entity

import "gorm.io/gorm"

type Member struct {
	gorm.Model
	Username	string	`gorm:"uniqueIndex"`
	Password	string
	Name 		string
	Tel			int		`gorm:"uniqueIndex"`
	Address		string

	Orders	[]Order	`gorm:"foreignKey:MemberID"`
}
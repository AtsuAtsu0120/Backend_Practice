package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

type GoStruct struct {
	A int
	B string
}

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/", hello)

	e.Logger.Fatal(e.Start(":8080"))
}

func hello(c echo.Context) error {
	stcData := &GoStruct{A: 10, B: "マツリ.zip"}
	return c.JSON(http.StatusOK, stcData)
}

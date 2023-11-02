package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

type PostInfo struct {
	TITLE string `json:"title"`
	TIME  int    `json:"time"`
}

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/", hello)

	e.POST("/", postTest)

	e.Logger.Fatal(e.Start(":8080"))
}

func hello(c echo.Context) error {
	stcData := &PostInfo{TITLE: "AtsuAtsu", TIME: 100}
	return c.JSON(http.StatusOK, stcData)
}
func postTest(c echo.Context) error {
	post := new(PostInfo)
	if err := c.Bind(post); err != nil {
		return c.String(http.StatusInternalServerError, "Error!")
	}

	fmt.Println(post.TITLE)
	return c.String(http.StatusOK, "POST")
}

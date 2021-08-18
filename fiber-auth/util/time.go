package util

import (
	"log"
	"time"
)

type Time struct {
	time.Time
	Date     time.Time
	Now      time.Time
	Location *time.Location
}

func (t *Time) FormatDate() time.Time {
	return time.Date(t.Date.Year(), t.Date.Month(), t.Date.Day(), t.Date.Hour(), t.Date.Minute(), t.Date.Second(), t.Date.Nanosecond(), t.Location)
}

func NewTime(timeConfig ...Time) *Time {
	location, err := time.LoadLocation("Asia/Jakarta")
	if err != nil {
		log.Fatal(err)
	}

	var newConfig Time

	if len(timeConfig) > 0 {
		newConfig = timeConfig[0]
		newConfig.Location = location
		return &newConfig
	}

	return &Time{
		Now:      time.Now(),
		Location: location,
	}
}

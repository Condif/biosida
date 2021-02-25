export const handleGoToBooking = (movie, setChosenMovie, router) => {
    const temp = {...movie}
    setChosenMovie(temp)
    router.push("/timeanddate")
  }
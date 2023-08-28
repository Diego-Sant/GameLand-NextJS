const isLoading = (bool) => {
    localStorage.setItem('isLoading', bool)
    window.dispatchEvent(new Event("storage"));
}

export default isLoading;
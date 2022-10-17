const fetchMyData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject();
    resolve('data 1');
  }, 2000);
});

const fetchMyDataTwo = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject();
    resolve('data 2');
  }, 1000);
});


describe("Async", () => {
  it("should be async", async () => {

    const p1 = fetchMyData();
    const p2 = fetchMyDataTwo();
    const result = await Promise.all([p1, p2]);

    expect(result[0]).toBe('data 2');
    expect(result[0]).toBe('data 1');

  });


});

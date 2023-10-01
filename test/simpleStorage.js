const SimpleStorage = artifacts.require("SimpleStorage")

contract('SimpleStorage', (accounts) => {
    const [bob, alice] = accounts
    it("should verify bob and alice's favorite numbers default to 0", async () => {
        const ssContract = await SimpleStorage.deployed()
        const result = await ssContract.setFavorite(1)
        console.log("risultato: ")
        console.log(result.receipt.gasUsed.toString())

    })


})
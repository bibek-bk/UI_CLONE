import Card from "./Card"

function Teams() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center  font-bold text-7xl py-14 gap-4">
                <h1>Our Leading , Strong</h1>
                <h1>and Creative Team</h1>
            </div>
            <div className="flex justify-between">
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex justify-between">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Teams
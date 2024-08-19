console.log('hai');

const arr: number[] = [4,3,6,7,4]


function maxNumber(nums: number[]): number {
    return nums.reduce((acc, curr)=>{
        return acc + curr
    })
}


export default class Mat {
    /**
     * 矩阵相乘
     * @param mat1 
     * @param mat2 
     * @param size 矩阵大小 如 [row, col] 为 3 * 3 大小
     */
    static mul(mat1, mat2, size) {
        const [row, col] = size;

        const out = new Array(row * col).fill(0);
        for (let i = 0; i < row; i += 1) {
            const rowData: number[] = [];
            const currRowIndex = i * row;
            for (let m = 0; m < col; m += 1) {
                rowData.push(mat1[currRowIndex + m]);
            }

            for (let j = 0; j < col; j += 1) {
                const colData: number[] = [];
                for (let n = 0; n < row; n += 1) {
                    colData.push(mat2[(n * row) + j]);
                }
                
                const currentIndex = currRowIndex + j;
                out[currentIndex] = rowData.map((c, index) => {
                    return c * colData[index]
                }).reduce((total, curr) => {
                    return total + curr;
                }, 0);
            }
        }

        return out;
    }
}

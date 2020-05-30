/**
 * 线性滤波器
 *  [1, 2, 3,     [1, 2, 3,
 *  4, 5, 6,  *   4, 5, 6,
 *  7, 8, 9]      7, 8, 9]
 *  = 1 * 1 + 2 * 2 + 3 * 3 + 4 * 4 + 5 * 5 + 6 * 6 + 7 * 7 + 8 * 8 + 9 * 9
 * @param mat 矩阵 需要为 n * n 大小
 * @param kernel 核 需要为 n * n 的核算子
 */
export const linearFilter = (mat: number[], kernel: number[]) => {
    return kernel.reduce((total, curr, index) => {
        return total + curr * mat[index] || 0;
    }, 0);
};

/**
 * 根据row col位置来取源数据中需与核运算的数据
 * @param src 源数据
 * @param srcWidth 源数据width
 * @param kernelSize 核大小
 * @param row 取源数据的开始row位置
 * @param col 取源数据的开始col位置
 * @param step 每一像素的步长，默认为灰度图为1，如果是rgba 则为4
 * @param offset 取步长中偏移量的值
 * @param axis 轴方向 默认xy xy|x|y
 */
export const getLinearMatData = (
    src: number[],
    srcWidth: number,
    kernelSize: number,
    row: number,
    col: number,
    step: number = 1,
    offset: number = 0,
    axis: "x" | "y" | "xy" = "xy"
) => {
    if (axis === "xy") {
        const out = new Array(kernelSize ** 2).fill(0);
        for (let i = 0; i < kernelSize; i += 1) {
            for (let j = 0; j < kernelSize; j += 1) {
                out[i * kernelSize + j] = src[(srcWidth * (row + i) + j + col) * step + offset];
            }
        }
        
        return out;
    }
    
    if (axis === "y") {
        const out = new Array(kernelSize).fill(0);
        for (let i = 0; i < kernelSize; i += 1) {
            out[i] = src[(srcWidth * (row + i) + col) * step + offset];
        }
        return out;
    }

    if (axis === "x") {
        const out = new Array(kernelSize).fill(0);
        for (let i = 0; i < kernelSize; i += 1) {
            out[i] = src[(srcWidth * row + i + col) * step + offset];
        }
        return out;
    }
};
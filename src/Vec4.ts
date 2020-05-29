import Vec3 from "./Vec3";

export default class Vec4 {
    public vec4: Array<number>;

    constructor() {
        this.vec4 = [1.0, 1.0, 1.0, 1.0];
    }

    /**
     * multiply mat4
     * @param mat4
     * Anm * Bmj = Cnj
     */
    multiplyMat4(mat4: Array<number>) {
        const a11 = mat4[0],
            a12 = mat4[1],
            a13 = mat4[2],
            a14 = mat4[3],

            a21 = mat4[4],
            a22 = mat4[5],
            a23 = mat4[6],
            a24 = mat4[7],

            a31 = mat4[8],
            a32 = mat4[9],
            a33 = mat4[10],
            a34 = mat4[11],

            a41 = mat4[12],
            a42 = mat4[13],
            a43 = mat4[14],
            a44 = mat4[15];

        return [
            this.vec4[0] * a11 + this.vec4[1] * a21 + this.vec4[2] * a31 + this.vec4[3] * a41,
            this.vec4[0] * a12 + this.vec4[1] * a22 + this.vec4[2] * a32 + this.vec4[3] * a42,
            this.vec4[0] * a13 + this.vec4[1] * a23 + this.vec4[2] * a33 + this.vec4[3] * a43,
            this.vec4[0] * a14 + this.vec4[1] * a24 + this.vec4[2] * a34 + this.vec4[3] * a44
        ]
    }

    static multiplyMat4(vec4: number[], mat4: number[], ...o: number[][]): number[] {
            const a11 = mat4[0],
            a12 = mat4[1],
            a13 = mat4[2],
            a14 = mat4[3],

            a21 = mat4[4],
            a22 = mat4[5],
            a23 = mat4[6],
            a24 = mat4[7],

            a31 = mat4[8],
            a32 = mat4[9],
            a33 = mat4[10],
            a34 = mat4[11],

            a41 = mat4[12],
            a42 = mat4[13],
            a43 = mat4[14],
            a44 = mat4[15];
        
        if (o && o.length) {
            const [next, ...n] = o;
            return Vec4.multiplyMat4([
                vec4[0] * a11 + vec4[1] * a21 + vec4[2] * a31 + vec4[3] * a41,
                vec4[0] * a12 + vec4[1] * a22 + vec4[2] * a32 + vec4[3] * a42,
                vec4[0] * a13 + vec4[1] * a23 + vec4[2] * a33 + vec4[3] * a43,
                vec4[0] * a14 + vec4[1] * a24 + vec4[2] * a34 + vec4[3] * a44
            ], next, ...n);
        }

        return [
            vec4[0] * a11 + vec4[1] * a21 + vec4[2] * a31 + vec4[3] * a41,
            vec4[0] * a12 + vec4[1] * a22 + vec4[2] * a32 + vec4[3] * a42,
            vec4[0] * a13 + vec4[1] * a23 + vec4[2] * a33 + vec4[3] * a43,
            vec4[0] * a14 + vec4[1] * a24 + vec4[2] * a34 + vec4[3] * a44
        ]
    }

    /**
     * 判断射线与三角形相交
     * 参考：http://www.cnblogs.com/graphics/archive/2010/08/09/1795348.html
     * @param orig 起点向量 vec3
     * @param dir 方向向量 vec3
     * @param v0 三角形向量1 vec3
     * @param v1 三角形向量2 vec3
     * @param v2 三角形向量3 vec3
     */
    static intersectTriangle(orig: number[], dir: number[], v0: number[], v1: number[], v2: number[]) {
        let E1 = new Float32Array(3);
        E1[0] = v1[0] - v0[0];
        E1[1] = v1[1] - v0[1];
        E1[2] = v1[2] - v0[2];
        
        let E2 = new Float32Array(3);
        E2[0] = v2[0] - v0[0];
        E2[1] = v2[1] - v0[1];
        E2[2] = v2[2] - v0[2];
        
        let P = new Float32Array(3);
        P = Vec3.cross(new Float32Array(dir), E2);

        var det = Vec3.dot(E1, P);  //求内积

        var T = new Float32Array(3);
        if (det > 0) {
            T[0] = orig[0] - v0[0];
            T[1] = orig[1] - v0[1];
            T[2] = orig[2] - v0[2];
        } else {
            T[0] = -orig[0] + v0[0];
            T[1] = -orig[1] + v0[1];
            T[2] = -orig[2] + v0[2];

            det = -det;
        }

        if (det < 0.0001) {
            return false;
        }

        var u = Vec3.dot(T, P);
        if (u < 0.0 || u > det) {
            return false;
        }
        var Q = new Float32Array(3);
        Q = Vec3.cross(T, E1);
        
        var v = Vec3.dot(new Float32Array(dir), Q);
        if (v < 0.0 || (u + v) > det) {
            return false;
        }
        
        return true;
    }
}

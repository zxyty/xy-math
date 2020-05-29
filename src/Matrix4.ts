import Vec3 from "./Vec3";
import { Rad } from "./Constants";

export default class Matrix4 {
  public mat4: Array<number>;
  constructor() {
    this.mat4 = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ];
  }

  identity(mat4?: Array<number>) {
    if (mat4) {
      mat4[0] = 1, mat4[1] = 0, mat4[2] = 0, mat4[3] = 0,
        mat4[4] = 0, mat4[5] = 1, mat4[6] = 0, mat4[7] = 0,
        mat4[8] = 0, mat4[9] = 0, mat4[10] = 1, mat4[11] = 0,
        mat4[12] = 0, mat4[13] = 0, mat4[14] = 0, mat4[15] = 1;
    } else {
      this.mat4[0] = 1, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0,
        this.mat4[4] = 0, this.mat4[5] = 1, this.mat4[6] = 0, this.mat4[7] = 0,
        this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = 1, this.mat4[11] = 0,
        this.mat4[12] = 0, this.mat4[13] = 0, this.mat4[14] = 0, this.mat4[15] = 1;
    }
  }

  multiply(a: Array<number>, b?: Array<number>) {
    const out = new Array<number>(16);
    if (b) {
      out[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
      out[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
      out[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
      out[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
      out[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
      out[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
      out[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
      out[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
      out[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
      out[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
      out[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
      out[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
      out[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
      out[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
      out[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
      out[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
    } else {
      out[0] = this.mat4[0] * a[0] + this.mat4[1] * a[4] + this.mat4[2] * a[8] + this.mat4[3] * a[12];
      out[4] = this.mat4[4] * a[0] + this.mat4[5] * a[4] + this.mat4[6] * a[8] + this.mat4[7] * a[12];
      out[8] = this.mat4[8] * a[0] + this.mat4[9] * a[4] + this.mat4[10] * a[8] + this.mat4[11] * a[12];
      out[12] = this.mat4[12] * a[0] + this.mat4[13] * a[4] + this.mat4[14] * a[8] + this.mat4[15] * a[12];
      out[1] = this.mat4[0] * a[1] + this.mat4[1] * a[5] + this.mat4[2] * a[9] + this.mat4[3] * a[13];
      out[5] = this.mat4[4] * a[1] + this.mat4[5] * a[5] + this.mat4[6] * a[9] + this.mat4[7] * a[13];
      out[9] = this.mat4[8] * a[1] + this.mat4[9] * a[5] + this.mat4[10] * a[9] + this.mat4[11] * a[13];
      out[13] = this.mat4[12] * a[1] + this.mat4[13] * a[5] + this.mat4[14] * a[9] + this.mat4[15] * a[13];
      out[2] = this.mat4[0] * a[2] + this.mat4[1] * a[6] + this.mat4[2] * a[10] + this.mat4[3] * a[14];
      out[6] = this.mat4[4] * a[2] + this.mat4[5] * a[6] + this.mat4[6] * a[10] + this.mat4[7] * a[14];
      out[10] = this.mat4[8] * a[2] + this.mat4[9] * a[6] + this.mat4[10] * a[10] + this.mat4[11] * a[14];
      out[14] = this.mat4[12] * a[2] + this.mat4[13] * a[6] + this.mat4[14] * a[10] + this.mat4[15] * a[14];
      out[3] = this.mat4[0] * a[3] + this.mat4[1] * a[7] + this.mat4[2] * a[11] + this.mat4[3] * a[15];
      out[7] = this.mat4[4] * a[3] + this.mat4[5] * a[7] + this.mat4[6] * a[11] + this.mat4[7] * a[15];
      out[11] = this.mat4[8] * a[3] + this.mat4[9] * a[7] + this.mat4[10] * a[11] + this.mat4[11] * a[15];
      out[15] = this.mat4[12] * a[3] + this.mat4[13] * a[7] + this.mat4[14] * a[11] + this.mat4[15] * a[15];
    }
    return out;
  }

  // 求行列式和
  determinant(disk?: Array<number>) {
    if (!disk) {
      disk = this.mat4;
    }

    var a11 = disk[0],
      a12 = disk[1],
      a13 = disk[2],
      a14 = disk[3],
      a21 = disk[4],
      a22 = disk[5],
      a23 = disk[6],
      a24 = disk[7],
      a31 = disk[8],
      a32 = disk[9],
      a33 = disk[10],
      a34 = disk[11],
      a41 = disk[12],
      a42 = disk[13],
      a43 = disk[14],
      a44 = disk[15];
    return (
      a11 * a22 * a33 * a44 - a11 * a22 * a34 * a43 - a11 * a23 * a32 * a44 + a11 * a23 * a34 * a42
      + a11 * a24 * a32 * a43 - a11 * a24 * a33 * a42 - a12 * a21 * a33 * a44 + a12 * a21 * a34 * a43
      + a12 * a23 * a31 * a44 - a12 * a23 * a34 * a41 - a12 * a24 * a31 * a43 + a12 * a24 * a33 * a41
      + a13 * a21 * a32 * a44 - a13 * a21 * a34 * a42 - a13 * a22 * a31 * a44 + a13 * a22 * a34 * a41
      + a13 * a24 * a31 * a42 - a13 * a24 * a32 * a41 - a14 * a21 * a32 * a43 + a14 * a21 * a33 * a42
      + a14 * a22 * a31 * a43 - a14 * a22 * a33 * a41 - a14 * a23 * a31 * a42 + a14 * a23 * a32 * a41
    );
  }

  inverse(disk?: Array<number>): Array<number> | boolean {
    if (!disk) {
      disk = this.mat4;
      /**
      * 矩阵A:
        a11  a12  a13  a14
        a21  a22  a23  a24
        a31  a32  a33  a34
        a41  a42  a43  a44
      */
    }
    // 判断此矩阵是否有逆
    // |A| != 0 则表示可以逆
    var det = this.determinant(disk);
    if (det == 0) {
      return false;
    }
    // 求伴随矩阵
    // 先求各组的代数余子式
    var a11 = disk[0];
    var a12 = disk[1];
    var a13 = disk[2];
    var a14 = disk[3];
    var a21 = disk[4];
    var a22 = disk[5];
    var a23 = disk[6];
    var a24 = disk[7];
    var a31 = disk[8];
    var a32 = disk[9];
    var a33 = disk[10];
    var a34 = disk[11];
    var a41 = disk[12];
    var a42 = disk[13];
    var a43 = disk[14];
    var a44 = disk[15];
    /**
    * a22  a23  a24
      a32  a33  a34
      a42  a43  a44
    */
    var A11 = (a22 * a33 * a44 + a23 * a34 * a42 + a24 * a32 * a43 - a24 * a33 * a42 - a23 * a32 * a44 - a22 * a34 * a43);
    /**
      a21  a23  a24
      a31  a33  a34
      a41  a43  a44
    */
    var A12 = -(a21 * a33 * a44 + a23 * a34 * a41 + a24 * a31 * a43 - a24 * a33 * a41 - a23 * a31 * a44 - a21 * a34 * a43);

    /**
    * a21  a22  a24
      a31  a32  a34
      a41  a42  a44
    */
    var A13 = (a21 * a32 * a44 + a22 * a34 * a41 + a24 * a31 * a42 - a24 * a32 * a41 - a22 * a31 * a44 - a21 * a34 * a42);

    /**
    * a21  a22  a23
      a31  a32  a33
      a41  a42  a43
    */
    var A14 = -(a21 * a32 * a43 + a22 * a33 * a41 + a23 * a31 * a42 - a23 * a32 * a41 - a22 * a31 * a43 - a21 * a33 * a42);

    /**
    * a12  a13  a14
      a32  a33  a34
      a42  a43  a44
    */
    var A21 = -(a12 * a33 * a44 + a13 * a34 * a42 + a14 * a32 * a43 - a14 * a33 * a42 - a13 * a32 * a44 - a12 * a34 * a43);

    /**
    * a11  a13  a14
      a31  a33  a34
      a41  a43  a44
    */
    var A22 = (a11 * a33 * a44 + a13 * a34 * a41 + a14 * a31 * a43 - a14 * a33 * a41 - a13 * a31 * a44 - a11 * a34 * a43);

    /**
    * a11  a12  a14
      a31  a32  a34
      a41  a42  a44
    */
    var A23 = -(a11 * a32 * a44 + a12 * a34 * a41 + a14 * a31 * a42 - a14 * a32 * a41 - a12 * a31 * a44 - a11 * a34 * a42);

    /**
    * a11  a12  a13
      a31  a32  a33
      a41  a42  a43
    */
    var A24 = (a11 * a32 * a43 + a12 * a33 * a41 + a13 * a31 * a42 - a13 * a32 * a41 - a12 * a31 * a43 - a11 * a33 * a42);

    /**
    * a12  a13  a14
      a22  a23  a24
      a42  a43  a44
    */
    var A31 = (a12 * a23 * a44 + a13 * a24 * a42 + a14 * a22 * a43 - a14 * a23 * a42 - a13 * a22 * a44 - a12 * a24 * a43);

    /**
    * a11  a13  a14
      a21  a23  a24
      a41  a43  a44
    */
    var A32 = -(a11 * a23 * a44 + a13 * a24 * a41 + a14 * a21 * a43 - a14 * a23 * a41 - a13 * a21 * a44 - a11 * a24 * a43);

    /**
    * a11  a12  a14
      a21  a22  a24
      a41  a42  a44
    */
    var A33 = (a11 * a22 * a44 + a12 * a24 * a41 + a14 * a21 * a42 - a14 * a22 * a41 - a12 * a21 * a44 - a11 * a24 * a42);

    /**
    * a11  a12  a13
      a21  a22  a23
      a41  a42  a43
    */
    var A34 = -(a11 * a22 * a43 + a12 * a23 * a41 + a13 * a21 * a42 - a13 * a22 * a41 - a12 * a21 * a43 - a11 * a23 * a42);

    /**
    * a12  a13  a14
      a22  a23  a24
      a32  a33  a34
    */
    var A41 = -(a12 * a23 * a34 + a13 * a24 * a32 + a14 * a22 * a33 - a14 * a23 * a32 - a13 * a22 * a34 - a12 * a24 * a33);

    /**
    * a11  a13  a14
      a21  a23  a24
      a31  a33  a34
    */
    var A42 = (a11 * a23 * a34 + a13 * a24 * a31 + a14 * a21 * a33 - a14 * a23 * a31 - a13 * a21 * a34 - a11 * a24 * a33);

    /**
    * a11  a12  a14
      a21  a22  a24
      a31  a32  a34
    */
    var A43 = Math.pow((-1), (4 + 3)) * (a11 * a22 * a34 + a12 * a24 * a31 + a14 * a21 * a32 - a14 * a22 * a31 - a12 * a21 * a34 - a11 * a24 * a32);

    /**
    * a11  a12  a13
      a21  a22  a23
      a31  a32  a33
    */
    var A44 = Math.pow((-1), (4 + 4)) * (a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a23 * a32);

    var out = new Array<number>(16);

    // 转置 / det
    out[0] = A11 / det;
    out[4] = A12 / det;
    out[8] = A13 / det;
    out[12] = A14 / det;
    out[1] = A21 / det;
    out[5] = A22 / det;
    out[9] = A23 / det;
    out[13] = A24 / det;
    out[2] = A31 / det;
    out[6] = A32 / det;
    out[10] = A33 / det;
    out[14] = A34 / det;
    out[3] = A41 / det;
    out[7] = A42 / det;
    out[11] = A43 / det;
    out[15] = A44 / det;

    return out;
  }

  static lookAt(eye: Float32Array, center: Float32Array, up: Float32Array) {
    const viewMatrix = new Matrix4();

    let direction = Vec3.subtract(eye, center);
    direction = Vec3.normalize(direction);

    let right = Vec3.cross(up, direction);
    right = Vec3.normalize(right);

    let top = Vec3.cross(direction, right);
    top = Vec3.normalize(top);

    viewMatrix.mat4[0] = right[0];
    viewMatrix.mat4[1] = top[0];
    viewMatrix.mat4[2] = direction[0];
    viewMatrix.mat4[3] = 0;

    viewMatrix.mat4[4] = right[1];
    viewMatrix.mat4[5] = top[1];
    viewMatrix.mat4[6] = direction[1];
    viewMatrix.mat4[7] = 0;

    viewMatrix.mat4[8] = right[2];
    viewMatrix.mat4[9] = top[2];
    viewMatrix.mat4[10] = direction[2];
    viewMatrix.mat4[11] = 0;

    viewMatrix.mat4[12] = -Vec3.dot(right, eye);
    viewMatrix.mat4[13] = -Vec3.dot(top, eye);
    viewMatrix.mat4[14] = -Vec3.dot(direction, eye);
    viewMatrix.mat4[15] = 1;

    return viewMatrix;
  }

  static makePerspective(fovy: number, aspect: number, near: number, far: number) {
    let out = new Matrix4();
    var f = 1.0 / Math.tan(fovy * Rad / 2);
    var nf = 1 / (near - far);
    out.mat4[0] = f / aspect;
    out.mat4[1] = 0;
    out.mat4[2] = 0;
    out.mat4[3] = 0;
    out.mat4[4] = 0;
    out.mat4[5] = f;
    out.mat4[6] = 0;
    out.mat4[7] = 0;
    out.mat4[8] = 0;
    out.mat4[9] = 0;
    out.mat4[10] = (far + near) * nf;
    out.mat4[11] = -1;
    out.mat4[12] = 0;
    out.mat4[13] = 0;
    out.mat4[14] = 2 * far * near * nf;
    out.mat4[15] = 0;

    return out;
  }

  static multiplyVec4(mat4: number[], vec4: number[]) {
    const out: number[] = [];
    out[0] = mat4[0] * vec4[0] + mat4[1] * vec4[1] + mat4[2] * vec4[2] + mat4[3] * vec4[3];
    out[1] = mat4[4] * vec4[0] + mat4[5] * vec4[1] + mat4[6] * vec4[2] + mat4[7] * vec4[3];
    out[2] = mat4[8] * vec4[0] + mat4[9] * vec4[1] + mat4[10] * vec4[2] + mat4[11] * vec4[3];
    out[3] = mat4[12] * vec4[0] + mat4[13] * vec4[1] + mat4[14] * vec4[2] + mat4[15] * vec4[3];

    return out;
  }
}

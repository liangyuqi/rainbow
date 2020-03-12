/*****
 *
Inputs:
------

  blocks: array of any objects that have .w and .h attributes

Outputs:
-------

  marks each block that fits with a .fit attribute pointing to a
  node with .x and .y coordinates

Example:
-------

  var blocks = [
    { w: 100, h: 100 },
    { w: 100, h: 100 },
    { w:  80, h:  80 },
    { w:  80, h:  80 },
    etc
    etc
  ];

  var packer = new GrowingPacker();
  packer.fit(blocks);

  for(var n = 0 ; n < blocks.length ; n++) {
    var block = blocks[n];
    if (block.fit) {
      Draw(block.fit.x, block.fit.y, block.w, block.h);
    }
  }
 */

export interface PNode {
  w: number;
  h: number;
  x?: number;
  y?: number;
  used?: boolean;
  down?: PNode;
  right?: PNode;
  fit?: PNode;
  data?: any;
}

export class GrowingPacker {
  private root!: PNode;
  private mw: number;
  private mh: number;
  constructor(maxWidth: number = 0, maxHeight: number = 0) {
    this.mw = maxWidth;
    this.mh = maxHeight;
  }
  public fit(blocks: PNode[]): PNode[] {
    let n;
    let node;
    let block;
    let len = blocks.length;
    let w = len > 0 ? blocks[0].w : 0;
    let h = len > 0 ? blocks[0].h : 0;
    this.root = {x: 0, y: 0, w: w, h: h};
    for (n = 0; n < len; n++) {
      block = blocks[n];
      if (node === this.findNode(this.root, block.w, block.h)) {
        block.fit = this.splitNode(node, block.w, block.h);
      } else block.fit = this.growNode(block.w, block.h);
    }
    return blocks;
  }

  private findNode(root: PNode, w: number, h: number): PNode {
    if (root.used) {
      // @ts-ignore
      return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
    } else if (w <= root.w && h <= root.h) {
      return root;
    } else {
      // @ts-ignore
      return null;
    }
  }

  private splitNode(node: PNode, w: number, h: number): PNode {
    node.used = true;

    node.down = {
      x: node.x,
      // @ts-ignore
      y: node.y + h,
      w: node.w,
      h: node.h - h
    };
    node.right = {
      // @ts-ignore
      x: node.x + w,
      y: node.y,
      w: node.w - w,
      h: h
    };
    return node;
  }

  private growNode(w: number, h: number): PNode {
    if (this.root.w + w > this.mw || this.root.h + h > this.mh) {
      console.error('Texture too large.');
      // @ts-ignore
      return;
    }

    let canGrowDown = w <= this.root.w;
    let canGrowRight = h <= this.root.h;

    let shouldGrowRight = canGrowRight && this.root.h >= this.root.w + w; // attempt to keep square-ish by growing right when height is much greater than width
    let shouldGrowDown = canGrowDown && this.root.w >= this.root.h + h; // attempt to keep square-ish by growing down  when width  is much greater than height

    if (shouldGrowRight) return this.growRight(w, h);
    else if (shouldGrowDown) return this.growDown(w, h);
    else if (canGrowRight) return this.growRight(w, h);
    else if (canGrowDown) return this.growDown(w, h);
    // @ts-ignore
    else return null; // need to ensure sensible root starting size to avoid this happening
  }

  private growRight(w: number, h: number): PNode {
    this.root = {
      used: true,
      x: 0,
      y: 0,
      w: this.root.w + w,
      h: this.root.h,
      down: this.root,
      right: {x: this.root.w, y: 0, w: w, h: this.root.h}
    };
    let node = this.findNode(this.root, w, h);
    if (node) return this.splitNode(node, w, h);
    // @ts-ignore
    else return null;
  }

  private growDown(w: number, h: number): PNode {
    this.root = {
      used: true,
      x: 0,
      y: 0,
      w: this.root.w,
      h: this.root.h + h,
      down: {x: 0, y: this.root.h, w: this.root.w, h: h},
      right: this.root
    };
    let node = this.findNode(this.root, w, h);
    if (node) return this.splitNode(node, w, h);
    // @ts-ignore
    else return null;
  }
}

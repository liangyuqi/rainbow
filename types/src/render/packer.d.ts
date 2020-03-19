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
export declare class GrowingPacker {
    private root;
    private mw;
    private mh;
    constructor(maxWidth?: number, maxHeight?: number);
    fit(blocks: PNode[]): PNode[];
    private findNode;
    private splitNode;
    private growNode;
    private growRight;
    private growDown;
}

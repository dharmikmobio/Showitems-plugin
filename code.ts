figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if(msg.type === 'run-plugin'){
    for(const noode of figma.currentPage.selection){
      console.log(noode.type);
    }
  }

  else if(msg.type === 'exitpage'){
    figma.closePlugin();
  }
}
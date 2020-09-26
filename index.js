function getblockid(name){
 return _.find(Entry.variableContainer.functions_,
        d => d.block.template.replace(/ /gi,'') == name).id
}

Entry.block[`func_${getblockid('%1노래재생%2')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('%1노래재생%2')}`].func = (sprite, script) => {
  Entry.variableContainer.getVariableByName('노래번호').value_ = script.getValue('content',script)
  window.open(Entry.variableContainer.getListByName('링크').array_[Number(script.getValue('content',script))-1].data)
  Entry.variableContainer.getListByName('인기도').array_[Number(script.getValue('content',script))-1].data = Number(Entry.variableContainer.getListByName('인기도').array_[Number(script.getValue('content',script))-1].data)+1
}

Entry.block[`func_${getblockid('유사도초기화%2')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('유사도초기화%2')}`].func = (sprite, script) => {
  Entry.variableContainer.getListByName('무작위숫자').array_ = []
}

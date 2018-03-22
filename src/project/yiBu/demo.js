// 需求: 点击二次确认删除按钮时,
// 首先将该类删除(delClass函数),
// 如果删除成功,刷新分类列表(search函数),
// 如果刷新列表成功,且parentId为0时,将展开的分类闭合(setexpandedRowKeys函数)

// 首先用 Promise 方式实现:
handleOk = () => {
  const {
    categoryId,
    parentId,
    delClass,
    search,
    searchParams,
    page: {
      pageNo,
    },
    setexpandedRowKeys,
  } = this.props;
  // 删除父类时，刷新当前页的整个页面，删除子类时，刷新该父类
  const reqObj = parentId === 0 ? { ...searchParams, pageNo } : { ...searchParams, parentId };
  delClass({ categoryId }).then((response) => {
    if (response && response.success) {
      message.success('删除成功！');
      return search(reqObj);  
      // 如果请求成功,返回 Promose 对象(search(reqObj)),后面的then将会被当做这个返回的Promise的第一个then来对待
    }
    return null; // 否则,返回 null,并将 null 传给下一个 then的 searchResponse
  }).then((searchResponse) => {
    if (searchResponse && searchResponse.success) {
      if (parentId === 0) {
        setexpandedRowKeys({ expandedRowKeys: [] });
      }
    }
  }).catch((e) => {
    message.error(e);
  });
}



// async-await 方式实现
handleOk = () => {
  const {
    categoryId,
    parentId,
    delClass,
    search,
    searchParams,
    page: {
      pageNo,
    },
    setexpandedRowKeys,
  } = this.props;
  // 删除父类时，刷新当前页的整个页面，删除子类时，刷新该父类
  const reqObj = parentId === 0 ? { ...searchParams, pageNo } : { ...searchParams, parentId };

  const asyncReadFile = async () => {
    const f1 = await delClass({ categoryId });
    if (f1 && f1.success) {
      message.success('删除成功！');
      const f2 = await search(reqObj);
      if (f2 && f2.success) {
        if (parentId === 0) {
          setexpandedRowKeys({ expandedRowKeys: [] });
        }
      }
    }
  };

  asyncReadFile();
}
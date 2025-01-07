function List() {
    return (
      <div>
          <ol>
              <li>Fruits</li>
              <ul>
                  <li>Apple</li>
                  <li>grapes</li>
                  <li>mango</li>
              </ul>
              <li>Vegetables</li>
              <ol type="I">
                  <li>Carrot</li>
                  <li>potato</li>
                  <li>Tomato</li>
              </ol>
              <li>Flowers</li>
              <ul content="*" color="red" margin="10px">
                  <li>Rose</li>
                  <li>Lily</li>
                  <li>Jasmine</li>
              </ul>
          </ol>
      </div>
    )
  }
  
  export default List
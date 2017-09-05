import React from "react";
import {NavLink} from "react-router-dom"
class Recs extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="rec">
			<div className="rec-title">
				<legend>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDOUE0MDFBN0E1MTExRTZBRURGODA0RUVGMkE2MEQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDOUE0MDFCN0E1MTExRTZBRURGODA0RUVGMkE2MEQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkM5QTQwMTg3QTUxMTFFNkFFREY4MDRFRUYyQTYwRDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkM5QTQwMTk3QTUxMTFFNkFFREY4MDRFRUYyQTYwRDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5nJXG7AAACbElEQVR42pyWQUhUURSG3zwtISQsxU1LFzK1ahUVmgrmQkRcKBLmQmQGM1GxdKUL0Y0aJJo4gkEKLppNiBK6EFIMZuVKWkyzaNUiC7HMhWb9R/4Lh+t9k7wDH+/dc+/5z5t3z5z7IrFYzMtit0EjqABRUED/D/AJbIJkIpHYCRKIBCS4A8ZAueU/lhiQa/k3QD0S/bKFfDshGAEfKX4AXoEaUAQug0u8r+HcT1AGrrmeVD9JDlgAjzieAkNg3xH3HayTAXAVT//1fwkmKH4EmsGydwGD8CEuh0HzJsFD0ANOQRNY8UJaPB4XzVawheRpn/vwkvMvLPFS0A5irCJjUfraIVhq5agC8+Ad5iK5fPooS29Y7cckeMKNN/aa1zbl+wuhGVy78cR/WCCidRNU+6xzsUVgyuw56LTEjXCbo/I6GeOxVN9wrlES3OdgVQU9DfH6dcx7Xu9JghIOdtWCGyES6BijVeKrSvqtFnwOkUDHGK08SXDCwRW1YDxEAh1jtE4kQYaDW2rBHFvGRW0EmzunxkYrIwm2Oai1ggZBB/98QSZzHRAftPxGa1sSJDl4DPKthbOgge3DNvE1QHzW+ifnU0ss6bNhSW+/zuZmm/SkSrCnfHv0ufrVELVEc93nz+zlZJ/jVYmlpKa5Xxnepxx9qJYaYr34dafmPFhjPzKvrM6RJA3ukrRDvI6xZ70N4mt2u34GitmylwPOg28O4QL2sC66lqh17kSTRtUCRvnaJOALmGZDLFRrC+mb5pouxkhsC5te6DPZ47GpTQ7/fginsp1o9qY+4FdFE+/1V8U+q+QDeJvtq+KfAAMASeKpuCNXiI8AAAAASUVORK5CYII=" />
					猜你喜欢
				</legend>
			</div>
			</div>
		)
	}
}

export default Recs;
import React from 'react';
import ReactDOM from 'react-dom';

const Table = ({onChange, data}) =>
			<div className="main-table">
				<table>
					<tbody className="main-table__wrap">
						<tr>
							<th>№</th>
							<th>Количество</th>
							<th>ОКВЕД2/ОКПД2</th>
							<th>Доп. сведения</th>
						</tr>
						<tr>
							<td>1</td>
							<td>
								<div className="main-form__group">
									<input type="number" placeholder="Количество *"/>
								</div>
								<div className="main-form__group">
									<select>
										<option>Kine</option>
										<option>Sirto</option>
									</select>
								</div>
							</td>
							<td>
								<div className="main-form__group">
									<select name="" className="OKV"></select>
								</div>
								<div className="main-form__group">
									<select name="" className="OKP"></select>
								</div>
							</td>
							<td>
								<div className="main-form__group">
									<textarea className="scrollbar-light" rows="3" defaultValue="В качестве классификационных признаков видов экономической деятельности в ОКВЭД 2 используются признаки, характеризующие сферу деятельности, процесс производства (технологию). В качестве дополнительного (в пределах одного и того же процесса производства) может выделяться признак «используемое сырье и материалы»."></textarea>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

export default Table;
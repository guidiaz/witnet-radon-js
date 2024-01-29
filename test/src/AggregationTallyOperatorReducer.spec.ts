import { AggregationTallyOperatorReducer } from '../../src/aggregationTallyOperatorReducer.js'
import { Cache } from '../../src/structures.js'
import { AggregationTallyReducer } from '../../src/types.js'
import { I18n } from '../../src/i18n.js'

describe('AggregationTallyOperatorReducer', () => {
  it('getJs', () => {
    const mirOperator: AggregationTallyReducer = AggregationTallyReducer.averageMean

    const context = { cache: new Cache(), i18n: new I18n() }
    const operator = new AggregationTallyOperatorReducer(context, mirOperator, 1, false)

    const result = operator.getJs()
    const expected = 'Witnet.Types.REDUCERS.averageMean'

    expect(result).toStrictEqual(expected)
  })

  it('getMarkup', () => {
    const mirOperator: AggregationTallyReducer = AggregationTallyReducer.averageMean

    const context = { cache: new Cache(), i18n: new I18n() }
    const operator = new AggregationTallyOperatorReducer(context, mirOperator, 1, false)

    const result = operator.getMarkup()
    const expected = {
      hierarchicalType: 'operator',
      id: 1,
      label: 'averageMean',
      markupType: 'select',
      options: [
        {
          hierarchicalType: 'operatorOption',
          label: 'mode',
          markupType: 'option',
          outputType: 'filterOutput',
        },
        {
          hierarchicalType: 'operatorOption',
          label: 'averageMean',
          markupType: 'option',
          outputType: 'filterOutput',
        },
        {
          hierarchicalType: 'operatorOption',
          label: 'averageMedian',
          markupType: 'option',
          outputType: 'filterOutput',
        },
        {
          hierarchicalType: 'operatorOption',
          label: 'deviationStandard',
          markupType: 'option',
          outputType: 'filterOutput',
        },
        {
          hierarchicalType: 'operatorOption',
          label: 'hashConcatenate',
          markupType: 'option',
          outputType: 'filterOutput',
        },
      ],
      outputType: 'filterOutput',
      scriptId: 1,
      selected: {
        arguments: [],
        description: 'Compute the average mean of the values',
        hierarchicalType: 'selectedOperatorOption',
        label: 'averageMean',
        markupType: 'option',
        outputType: 'reducerOutput',
      },
    }

    expect(result).toStrictEqual(expected)
  })

  it('getMir', () => {
    const mirOperator: AggregationTallyReducer = AggregationTallyReducer.averageMean

    const context = { cache: new Cache(), i18n: new I18n() }
    const operator = new AggregationTallyOperatorReducer(context, mirOperator, 1, false)

    const result = operator.getMir()

    expect(result).toStrictEqual(mirOperator)
  })

  it('update', () => {
    const mirOperator: AggregationTallyReducer = AggregationTallyReducer.mode

    const context = { cache: new Cache(), i18n: new I18n() }
    const operator = new AggregationTallyOperatorReducer(context, mirOperator, 1, false)

    operator.update(AggregationTallyReducer.averageMean)

    expect(operator.code).toStrictEqual(AggregationTallyReducer.averageMean)
  })
})

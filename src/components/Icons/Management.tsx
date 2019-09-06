// Dependencies
import * as React from 'react';
// Styled
import { SvgElement } from './IconStyle';
// Props
import { IconProps, defaultProps } from './IconProps';

const Management = (props: IconProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { fillColor, height, onClick, width } = componentProps;

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <SvgElement
      height={height}
      onClick={handleClick}
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={width}
    >
      <g>
        <path
          fill={fillColor}
          d="
            M28.4768391,20.1186771
            H27.114975V3.5898604
            c0-1.2417474-1.0147152-2.2563-2.256382-2.2563
            H12.8157301
            l-1.2016535-1.1884528
            c-0.0934696-0.0933878-0.2269506-0.1466823-0.3605127-0.1466823
            H7.1414061
            c-1.2416658,0-2.2563815,1.0145527-2.2563815,2.2563v17.8639526
            H3.536525c-0.6408386,0-1.161561,0.5208855-1.161561,1.1483593
            v9.5861778
            c0,0.6274757,0.5207224,1.1483612,1.161561,1.1483612
            h24.9403133
            c0.6408386,0,1.1481972-0.5208855,1.1481972-1.1483612
            v-9.5861778
            C29.6250362,20.6395626,29.1176777,20.1186771,28.4768391,20.1186771z
            M28.6236839,30.8532143
            c0,0.0801868-0.06674,0.1470089-0.1468449,0.1470089
            H3.536525c-0.0934691,0-0.1602097-0.0668221-0.1602097-0.1470089
            v-9.5861778
            c0-0.0801868,0.0667405-0.1470089,0.1602097-0.1470089
            h1.3484995
            h1.0013514
            h3.3512025
            h0.133481
            h0.1334801
            h0.4939938
            h0.133563
            h0.1334801
            h0.6942968
            v1.9226799c0,0.9747849,0.8010483,1.775671,1.7757521,1.775671
            h6.5287485
            c0.9880695,0,1.7891178-0.8008862,1.7891178-1.775671
            v-1.9226799
            h0.5607338h0.1335621
            h0.133482
            h0.4939919
            h0.133482
            h0.1335621
            h3.4713192
            h1.0013504
            h1.3618641
            c0.0801048,0,0.1468449,0.0668221,0.1468449,0.1470089V30.8532143z
            M11.4672308,20.1186771
            h-1.2016544v-2.6834717
            c0-0.5741806,0.3204193-1.1081047,0.8277779-1.3484993
            l2.2430172-1.0414448
            l1.5621662,1.5621662
            c0.2803268,0.2803268,0.6542034,0.4271717,1.0413637,0.4271717
            c0.3872414,0,0.7610359-0.1468449,1.0414448-0.4271717
            l1.5620842-1.5621662l2.2430172,1.0414448
            c0.3204193,0.1468449,0.5607338,0.4138069,0.7076607,0.7342262
            c0.0533772,0.1202793,0.0801048,0.2270317,0.1067524,0.3337841
            c0.0133648,0.1069145,0.0133648,0.2004662,0.0133648,0.280489
            v2.6834717H20.546133
            c-0.2670422,0-0.4939938,0.2271938-0.4939938,0.4941559
            v2.4298744
            c0,0.4271717-0.347147,0.7743187-0.7877655,0.7743187
            h-6.5287485
            c-0.4272528,0-0.7744007-0.347147-0.7744007-0.7743187V20.612833
            C11.9612246,20.345871,11.7342739,20.1186771,11.4672308,20.1186771z
            M14.2843466,14.3643293
            c0.1201982-0.1602097,0.2003031-0.3337841,0.2269497-0.5340872
            c0.1735744,0.0668221,0.3471489,0.1202803,0.5340872,0.1737375
            c0.2936907,0.066659,0.5874624,0.0933876,0.8811531,0.0933876
            H15.96663c0.2536783,0,0.5073576-0.0267286,0.7610369-0.0668221
            c0.2135849-0.0532942,0.4272518-0.1201162,0.6408386-0.2003031
            c0.0400925,0.1871014,0.1068344,0.3605127,0.2003021,0.5208855
            c0.0400124,0.0399303,0.0667419,0.0800238,0.0934696,0.1199532
            l-1.4152393,1.4153223
            c-0.1602917,0.1602087-0.4539824,0.1602087-0.614192,0
            l-1.4152403-1.4153223
            C14.2443352,14.4443521,14.2709818,14.4044218,14.2843466,14.3643293z
            M17.7823944,12.40172l-0.0267296,0.0133638
            c-0.1067524,0.0933876-0.2403145,0.1869383-0.3604298,0.2671251
            c-0.4272537,0.2535973-0.9212475,0.3870783-1.4286051,0.3870783
            h-0.0400934c-0.5073576,0-1.0013514-0.133481-1.4418869-0.4004431
            c-0.1201982-0.0668221-0.2403145-0.1470079-0.3605127-0.2537603
            c-0.0533762-0.0400934-0.1068335-0.0933876-0.1602097-0.133481
            c-0.066741-0.0801859-0.133563-0.1470079-0.2003031-0.2270317
            c-0.0934696-0.1067514-0.1735744-0.2270317-0.2536793-0.3605127
            c-0.2536783-0.4271708-0.3871593-0.9213276-0.3871593-1.4285221
            V8.8101215c0-0.4405365,0.0934687-0.8409786,0.2804079-1.2148557
            c0.1067514-0.2270317,0.2403145-0.4406991,0.4005241-0.6274743
            c0.5340052-0.6142731,1.3084059-0.9612584,2.1228189-0.9612584
            H15.96663c0.7876844,0,1.5487204,0.3469853,2.0828066,0.9345293
            c0.1602097,0.1867757,0.2936916,0.3872414,0.4138889,0.6007457
            c0.200304,0.3872414,0.2936916,0.8277769,0.2936916,1.2683134
            v1.4554148c0,0.5339231-0.133482,1.0414438-0.4138889,1.4686155
            c-0.06674,0.1201172-0.133482,0.2136679-0.2135868,0.3204193
            c-0.06674,0.0800238-0.1468449,0.1602097-0.2536774,0.2537603
            L17.7823944,12.40172z
            M5.8863759,2.2547252
            c0-0.6942962,0.5607338-1.2549486,1.2550302-1.2549486
            h3.9119358l1.2149372,1.1881268
            c0.0934696,0.0935507,0.2136679,0.1470082,0.3471489,0.1470082
            h12.243165c0.6942978,0,1.2550316,0.5606525,1.2550316,1.2549489
            v16.5288162h-3.4713192
            v-2.6834717c0-0.0800228,0-0.1735744-0.0133648-0.2270317
            v-0.0668221
            c-0.1068325-0.8677082-0.6408386-1.6288261-1.4152393-1.9893389
            l-2.5901661-1.2014904
            c-0.1602097-0.0668221-0.2670422-0.2403965-0.2670422-0.4273348
            v-0.2669621
            c0.3204193-0.2535973,0.5874615-0.547451,0.8144131-0.894599
            c0.4006042-0.61411,0.6141911-1.3483372,0.6141911-2.0960903
            V8.8101215
            c0-0.6408386-0.1602097-1.2683134-0.4539013-1.8156013
            c-0.1335621-0.240396-0.280407-0.4540634-0.4539814-0.6542034
            C18.156271,5.4722834,17.0880985,4.9784532,15.96663,4.9784532
            h-0.0400934
            c-1.1481962,0-2.2162886,0.507195-2.937232,1.3750653
            c-0.1735744,0.2003026-0.3205013,0.4271712-0.4539814,0.654366
            c-0.2936907,0.5606523-0.4406176,1.1747622-0.4406176,1.802237
            v1.4554148c0,0.7477531,0.2136669,1.4552517,0.6008272,2.0695248
            c0.2269497,0.3471479,0.5073576,0.6675673,0.8277769,0.9211645
            v0.2669621
            c0,0.1869383-0.1068335,0.3605127-0.2670431,0.4406986
            l-2.5901651,1.1881266
            c-0.8677893,0.4006062-1.4285231,1.3084059-1.4285231,2.2831926
            v2.6834717
            H5.8863759V2.2547252z
          "
        />
        <path
          fill={fillColor}
          d="
            M18.77038,27.5554714
            h-5.540761
            c-0.2804079,0-0.5073576,0.2270317-0.5073576,0.5073566
            c0,0.280489,0.2269497,0.5073586,0.5073576,0.5073586
            h5.540761c0.2804089,0,0.5073586-0.2268696,0.5073586-0.5073586
            C19.2777386,27.7825031,19.0507889,27.5554714,18.77038,27.5554714z
          "
        />
      </g>
    </SvgElement>
  );
};

export { Management };